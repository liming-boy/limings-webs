theme: {
    extend: {
        fontFamily: {
            sans: [
                'Roboto',
                'sans-serif'
            ],
        },
    },
},

const btn = document.getElementById('menuBtn');
const dropdown = document.getElementById('menu');

btn.addEventListener('click', () => {
   dropdown.classList.toggle ('hidden');
   dropdown.classList.toggle ('flex');

}
);