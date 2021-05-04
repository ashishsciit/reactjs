const tailwaindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwaindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}