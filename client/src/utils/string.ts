export const convertHalfWidth = (string = '') => {
  return string.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0))
}

export const convertFullWidth = (string = '') => {
  return string.replace(/[A-Za-z0-9]/g, (s) => String.fromCharCode(s.charCodeAt(0) + 0xFEE0))
}

// const settings = {
//   symbol: '$',
//   format: '%s%v',
//   decimal: '.',
//   thousand: ',',
//   precision: 2,
//   grouping: 3,
//   stripZeros: false,
//   fallback: 0,
//   round: 0
// }

// function stripInsignificantZeros(str: string, decimal: string) {
//   const parts = str.split(decimal)
//   const integerPart = parts[0]
//   const decimalPart = parts[1].replace(/0+$/, '')

//   if (decimalPart.length > 0) {
//     return integerPart + decimal + decimalPart
//   }

//   return integerPart
// }

// function checkCurrencyFormat(format: string) {
//   // Format should be a string, in which case `value` ('%v') must be present
//   if (typeof format === 'string' && format.match('%v')) {
//     // Create and return positive, negative and zero formats
//     return {
//       pos: format,
//       neg: format.replace('-', '').replace('%v', '-%v'),
//       zero: format
//     }
//   }

//   return format
// }

// function checkPrecision(val: number, base: number) {
//   val = Math.round(Math.abs(val))
//   return isNaN(val) ? base : val
// }

// function toFixed(value: number, precision: number, round: number) {
//   precision = checkPrecision(precision, settings.precision)
//   const power = Math.pow(10, precision)

//   let roundMethod
//   if (round > 0) {
//     roundMethod = Math.ceil
//   } else if (round < 0) {
//     roundMethod = Math.floor
//   } else {
//     roundMethod = Math.round
//   }

//   return (roundMethod((value + 1e-8) * power) / power).toFixed(precision)
// }

// function formatNumber(number: number, opts = {}) {
//   opts = { ...settings, ...opts }

//   // Do some calc
//   const negative = number < 0 ? '-' : ''
//   const base = parseInt(toFixed(Math.abs(number), opts.precision, opts.round), 10) + ''
//   const mod = base.length > 3 ? base.length % 3 : 0

//   // Format the number
//   const formatted = negative +
//     (mod ? base.substr(0, mod) + opts.thousand : '') +
//     base.substr(mod).replace(/(\d{3})(?=\d)/g, '$1' + opts.thousand) +
//     (opts.precision > 0 ? opts.decimal + toFixed(Math.abs(number), opts.precision).split('.')[1] : '')

//   return opts.stripZeros ? stripInsignificantZeros(formatted, opts.decimal) : formatted
// }

// export const formatMoney = (amount: number, opts = {}) => {
//   opts = { ...settings, ...opts }

//   const formats = checkCurrencyFormat(opts.format)

//   let useFormat

//   if (amount > 0) {
//     useFormat = formats.pos
//   } else if (amount < 0) {
//     useFormat = formats.neg
//   } else {
//     useFormat = formats.zero
//   }

//   // Return with currency symbol added
//   return useFormat
//     .replace('%s', opts.symbol)
//     .replace('%v', formatNumber(Math.abs(amount), opts))
// }

export const reduceString = (string: string, limitText = 0) => {
  if (string.length > limitText) {
    return string.substring(0, limitText) + ' ... '
  }

  return string
}
