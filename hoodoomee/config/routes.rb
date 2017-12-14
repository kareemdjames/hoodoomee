Rails.application.routes.draw do
  resources :barbers
  resources :barbershops
  resources :users

  # root to: "root#index" For deployment to heroku

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
