
const DateTime = {
  state: {
    intervals: [
      // { label: 'year', seconds: 31536000 },
      // { label: 'month', seconds: 2592000 },
      { label: 'day', seconds: 86400 }
      // { label: 'hour', seconds: 3600 },
      // { label: 'minute', seconds: 60 },
      // { label: 'second', seconds: 1 }
    ]
  },
  mutations: {

  },
  actions: {
    async timeSince (context, date) {
      // eslint-disable-next-line
      let formattedDate = new Date(date)
      const seconds = Math.floor((Date.now() - formattedDate.getTime()) / 1000)
      const interval = this.state.DateTime.intervals.find(i => i.seconds < seconds)
      let count = Math.floor(seconds / interval.seconds)
      if (count > 60) {
        count = '!!'
      }
      return count
    },
    async timeUntil (context, dates) {
      let formattedStart
      if (dates.start) {
        formattedStart = new Date(dates.start)
      } else {
        formattedStart = new Date(Date.now())
      }
      const formattedEnd = new Date(dates.end)
      const seconds = Math.floor((Date.now() + formattedStart.getTime()) / 1000)
      const interval = this.state.DateTime.intervals.find(i => i.seconds < seconds)
      const count = Math.floor(seconds / interval.seconds)
      const endSeconds = Math.floor((Date.now() + formattedEnd.getTime()) / 1000)
      const endInterval = this.state.DateTime.intervals.find(i => i.seconds < endSeconds)
      const endCount = Math.floor(endSeconds / endInterval.seconds)
      return endCount - count
    }

  }
}

export default DateTime
