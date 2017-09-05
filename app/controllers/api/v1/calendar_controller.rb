require 'big_calendar/event_mapper'

module Api
  module V1
    class CalendarController < ApiController
      def events
        big_cal_events = Rails.cache.fetch("events_uzd_date", expires_in: 1.minute) do
          events         = GoogleCalendar.list_events(calendar: params.permit(:name) || 'uzd')
          events.map(&BigCalendar::EventMapper.method(:from_google))
        end

        render json: big_cal_events
      end
    end
  end
end
