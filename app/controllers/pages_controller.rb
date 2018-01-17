class PagesController < ApplicationController

    def show
        @page = Page.includes(:links, :images).find(1)
    end
end
