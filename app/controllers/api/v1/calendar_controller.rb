module Api
  module V1
    class CalendarController < ApiController
      def events
        events = GoogleCalendar.list_events(calendar: params.permit(:name) || 'uzd')
        render json: events
      end
    end
  end
end
