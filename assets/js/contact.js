		/* =========== ========== */
		const form = document.querySelector('form'),
			statusTxt = form.querySelector('.button-area span');

		form.onsubmit = (e)=> {
			e.preventDefault(); // mencegah formulir dikirimkan
			statusTxt.style.color = 'red';
			statusTxt.style.display = 'block';

			let xhr = new XMLHttpRequest();
			xhr.open('POST', 'message.php', true)
			xhr.onload = () => { //once ajax loaded
				if (xhr.readyState == 4 && xhr.status == 200) { // jika status respon ajax adalah 200 & status siap adalah 4 berarti tidak ada kesalahan
					let response = xhr.response; // menyimpan respons ajax dalam variabel respons
					// jika respon adalah kesalahan seperti memasukkan alamat email yang valid maka kami akan mengubah warna status menjadi merah jika tidak, setel ulang formulir
					if (response.indexOF('Email and password field is required!') != -1 || response.indexOF('Enter a valid email address') || response.indexOF('Sorry, failed to send your message')){
						statusTxt.style.color = 'red';
					} else {
						form.reset();
						setTimeout(() => {
							statusTxt.style.display = 'none';
						}, 3000); // sembunyikan statusTxt setelah 3 detik jika pesan terkirim
					}
					statusTxt.innerText = response;
				}
			}
			let formData = new FormData(form); // membuat obj formdata baru. obj ini digunakan untuk mengirim data ruangan
			xhr.send(formData); // data formulir seding
		}

		/* ================== DARK LIGHT THEME ================= */
		const themeButton = document.getElementById('theme-button')
		const darkTheme = 'dark-theme'
		const iconTheme = 'ri-sun-line'

		// Topik yang dipilih sebelumnya (jika pengguna dipilih)
		const selectedTheme = localStorage.getItem('selected-theme')
		const selectedIcon = localStorage.getItem('selected-icon')

		// Mendapatkan tema saat ini yang dimiliki antarmuka dengan memvalidasi kelas tema gelap
		const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
		const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

		// Kita memvalidasi jika pengguna sebelumnya memilih topik
		if (selectedTheme) {
		// Jika validasi terpenuhi, kita bertanya apa masalahnya untuk mengetahui apakah kami mengaktifkan atau menonaktifkan dark
		document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
		themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
		};

		// Aktifkan / nonaktifkan tema secara manual dengan tombol
		themeButton.addEventListener('click', () => {
			// Tambahkan atau hapus tema gelap / ikon
			document.body.classList.toggle(darkTheme)
			themeButton.classList.toggle(iconTheme)
			// Menyimpan tema dan ikon saat ini yang dipilih pengguna
			localStorage.setItem('selected-theme', getCurrentTheme())
			localStorage.setItem('selected-icon', getCurrentIcon())
		});

			/* ================== GULIR REVEL ANIMASI ================= */
			const sr = ScrollReveal({
				origin: 'top',
				distance: '60px',
				duration: 2500,
				delay: 400,
			})
			sr.reveal('#wppr')
			sr.reveal('header', { delay: 500 })
			sr.reveal('.dbl-field', { delay: 600 })
			sr.reveal('.rev-field', { delay: 700 })
			sr.reveal('.massage', { interval: 100, delay: 700 })
			sr.reveal('.button-area', { delay: 800 })
			sr.reveal('.filters__content', { delay: 900 })
			sr.reveal('.filters', {delay: 1000})