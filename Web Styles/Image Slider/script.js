if (document.querySelector(".gallery__item")) {

	const container = document.querySelector(".container");

	const galleryItem = document.querySelectorAll(".gallery__item");

	const cleaner = () => {

		galleryItem.forEach((gallery) => {

			gallery.classList.remove("--active");

		});

	};

	galleryItem.forEach((gallery, i) => {

		gallery.addEventListener("click", () => {

			cleaner();

			gallery.classList.add("--active");

			if (i === 0) {

				container.style.backgroundColor = "#95120e4d";

			}

			if (i === 1) {

				container.style.backgroundColor = "#1f9ec14d";

			}

			if (i === 2) {

				container.style.backgroundColor = "#d4d1ce4d";

			}

			if (i === 3) {

				container.style.backgroundColor = "#c76d484d";

			}

			if (i === 4) {

				container.style.backgroundColor = "#df91484d";

			}

		});

	});

}