import os
import openai
from aiogram import Bot, Dispatcher, executor, types
from keep_alive import keep_alive

bot = Bot(token=os.getenv("tg_token"))
dp = Dispatcher(bot)

openai.api_key = os.getenv("ai_token")

keep_alive()

@dp.message_handler(commands=['start', 'help'])
async def welcome(message: types.Message):
  await message.reply('Hello! Im GPT chat bot. Ask me something')


@dp.message_handler()
async def gpt(message: types.Message):
  user_id = str(message.from_user.id)

  # Check if user's ID is "xxx" or "yyy" (unlimited questions)
  if user_id == "User_1" or user_id == "User_2" :
    response = openai.Completion.create(model="text-davinci-003",
                                        prompt=message.text,
                                        temperature=0.5,
                                        max_tokens=1024,
                                        top_p=1,
                                        frequency_penalty=0.0,
                                        presence_penalty=0.0)
    await message.reply(response.choices[0].text)
  else:
    # Check if user ID is in the limited user list ["xxx", "yyy"]
    limited_users = ["xxx", "yyy"]
    if user_id in limited_users:
      # Check if the user has remaining question tries
      remaining_tries = get_remaining_tries(user_id)
      # Implement your own function to get the remaining tries

      if remaining_tries > 0:
        response = openai.Completion.create(model="text-davinci-003",
                                            prompt=message.text,
                                            temperature=0.5,
                                            max_tokens=1024,
                                            top_p=1,
                                            frequency_penalty=0.0,
                                            presence_penalty=0.0)
        await message.reply(response.choices[0].text)
        decrement_tries(
          user_id
        )  # Implement your own function to decrement the remaining tries
      else:
        await message.reply("Sorry, you have reached the question limit.")
    else:
      await message.reply("Sorry.")


# @dp.message_handler()
# async def gpt(message: types.Message):
#   response = openai.Completion.create(
#     model="text-davinci-003",
#     prompt=message.text,
#     temperature=0.5,
#     max_tokens=1024,
#     top_p=1,
#     frequency_penalty=0.0,
#     presence_penalty=0.0
#   )
#   await message.reply(response.choices[0].text)

if __name__ == "__main__":
  executor.start_polling(dp)
