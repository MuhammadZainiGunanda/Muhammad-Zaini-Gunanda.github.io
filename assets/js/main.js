		/* ================== FILTERS TABS ================= */
		const tabs = document.querySelectorAll('[data-target]'),
			tabContents = document.querySelectorAll('[data-content]')

		tabs.forEach(tab => {
			tab.addEventListener('click', () => {
				const target = document.querySelector(tab.dataset.target)
				tabContents.forEach(tc => { // tc = tabcontent
					tc.classList.remove('filters__active')
				})
				target.classList.add('filters__active')

				tabs.forEach(t => {
					t.classList.remove('filter-tab-active')
				})
				tab.classList.add('filter-tab-active')
			})
		})	  


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

		// Memvalidasi jika pengguna sebelumnya memilih topik
		if (selectedTheme) {
		// Jika validasi terpenuhi, kita bertanya apa masalahnya untuk mengetahui apakah kami mengaktifkan atau menonaktifkan dark
		document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
		themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
		}

		// Aktifkan / nonaktifkan tema secara manual dengan tombol
		themeButton.addEventListener('click', () => {
			// Tambahkan atau hapus tema gelap / ikon
			document.body.classList.toggle(darkTheme)
			themeButton.classList.toggle(iconTheme)
			// menyimpan tema dan ikon saat ini yang dipilih pengguna
			localStorage.setItem('selected-theme', getCurrentTheme())
			localStorage.setItem('selected-icon', getCurrentIcon())
		})

		/* ================== SCROLL REVEL ANIMATION ================= */
		const sr = ScrollReveal({
			origin: 'top',
			distance: '60px',
			duration: 2500,
			delay: 400,
		})
		sr.reveal('.profile__border')
		sr.reveal('.profile__name', { delay: 500 })
		sr.reveal('.profile__profession', { delay: 600 })
		sr.reveal('.profile__social', { delay: 700 })
		sr.reveal('.profile__info-group', { interval: 100, delay: 700 })
		sr.reveal('.profile__button', { delay: 800 })
		sr.reveal('.filters__content', { delay: 900 })
		sr.reveal('.filters', {delay: 1000})
