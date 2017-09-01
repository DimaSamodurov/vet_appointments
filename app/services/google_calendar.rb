require 'google/apis/calendar_v3'

class GoogleCalendar
  Calendar = Google::Apis::CalendarV3

  def self.list_events(options)
    calendar = Calendar::CalendarService.new
    calendar.authorization = user_credentials_for(Calendar::AUTH_CALENDAR)

    page_token = nil
    limit = options[:limit] || 1000
    start = (options[:since] && DateTime.parse(options[:since]).iso8601) || 1.month.ago.iso8601
    events = []
    begin
      result = calendar.list_events('primary',
                                    max_results: [limit, 100].min,
                                    single_events: true,
                                    order_by: 'startTime',
                                    time_min: start,
                                    page_token: page_token,
                                    fields: 'items(id,summary,start),next_page_token')

      events.push *result.items

      limit -= result.items.length
      if result.next_page_token
        page_token = result.next_page_token
      else
        page_token = nil
      end
    end while !page_token.nil? && limit > 0
    events
  end

  private

  def self.user_credentials_for(scope)
    authorizer = Google::Auth::ServiceAccountCredentials.make_creds(
      json_key_io: File.open(File.expand_path(ENV.fetch('GOOGLE_SERVICE_ACCOUNT_SECRETS'))), scope: scope)
    authorizer.fetch_access_token!
    authorizer
  end
end
