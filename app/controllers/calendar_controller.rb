class CalendarController < ApplicationController
  def index
    events = GoogleCalendar.list_events(calendar: params.permit(:name) || 'uzd')
    render json: events
  end
end
