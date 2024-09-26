import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/useLanguageStore'

function getPeriodFromDateString(start: string, end: string): string {
  try {
    const startDate = new Date(start)
    const endDate = new Date(end)

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      console.error('Check date format in data files.')
      return ''
    }
    if (startDate > endDate) {
      console.error('startDate cannot be earlier than endDate. Error : consistency.')
      return ''
    }

    const months: number =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth())
    const years: number = Math.floor(months / 12)
    const remainingMonths: number = (months % 12) + 1 // starting month

    return `${getPeriodOrthograph(years, 'TEXT_YEAR')} ${getPeriodOrthograph(remainingMonths, 'TEXT_MONTH')}`.trim()
  } catch (e) {
    console.error('Error while calculating period from dates :', e)
    return ''
  }
}

function getPeriodOrthograph(value: number, word: string): string {
  const { t } = useI18n()
  const languageStore = useLanguageStore()

  if (value === 0) {
    return ''
  }
  let res = ''
  if (!languageStore.isKorean()) {
    // words space and handle plural
    res = `${value} ${t(word)}`
    if (value > 1) {
      res[res.length - 1] === 's' ? '' : (res += 's')
    }
  } else {
    //it's korean: no space, no plural
    res = `${value}${t(word)}`
  }
  return res
}

function toStringYearMonthDate(date: string): string {
  const convertedDate = new Date(date).getTime()
  if (isNaN(convertedDate)) {
    console.error('Date format error on : ', date)
    return ''
  }
  const options: Intl.DateTimeFormatOptions = { year: '2-digit', month: 'short' }
  return new Intl.DateTimeFormat('en-US', options).format(convertedDate)
}
export { getPeriodFromDateString, toStringYearMonthDate }
