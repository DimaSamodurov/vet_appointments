Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/calendar/:name', to: 'calendar#index'

  namespace 'api' do
    namespace 'v1' do
      get '/calendar/events/:name', to: 'calendar#events'
    end
  end

  root to: 'home#index'
end
