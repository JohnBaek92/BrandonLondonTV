class BlogsController < ApplicationController

    def index
        page = params[:page].to_i
        blogs = Blog.order(created_at: :desc).limit(4).offset(page * 4)
        @blogs = blogs ? blogs : []
    end

    def show 
        @blog = Blog.find(params[:id])
    end


end
