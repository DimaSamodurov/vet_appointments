class CalendarController < ApplicationController
  def index
    events = GoogleCalendar.list(calendar: params.permit(:name) || 'uzd')
    render json: events
  end
end
