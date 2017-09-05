module BigCalendar
  class EventMapper
    def self.from_google(event)
      {
        'title':  event.summary,
        'start':  event.start.date_time.iso8601,
        'end':    event.end.date_time.iso8601,
        'desc':   event.description
      }
    end
  end
end
