Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  defaults format: :json do
    resources :posts, only: %i[index]
end

  root 'static_pages#root'
end
