Rails.application.routes.draw do
  resources :rooms do 
    resources :to_dos
  end
  resources :boards
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/boards/:board_id/rooms/:id', to: 'rooms#board_to_room'
  resources :users 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
