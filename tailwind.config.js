/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        nature : "url('../assets/images/nature.png')"
      },
      fontFamily : {
        iransans : "iran-sans"
      },
        animation: {
          upDown : 'ud 3500ms linear 1s infinite',
          upDown1 :'ud1 3s linear 1s infinite',
          upDown3 :'ud3 2500ms linear 1s infinite',
        },
        keyframes :{
          ud : {
            '0% , 100%' : {transform : 'translateY(0%)'},
            '50%' : {transform : 'translateY(50%)'}
          },
          ud1 : {
            '0% , 100%' : {transform : 'translateY(0%)'},
            '50%' : {transform : 'translateY(50%)'}
          },
          ud3 : {
            '0% , 100%' : {transform : 'translateY(0%)'},
            '50%' : {transform : 'translateY(50%)'}
          }
        }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

