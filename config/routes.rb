Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/calendar/:name', to: 'calendar#index'

  root to: 'home#index'
end
