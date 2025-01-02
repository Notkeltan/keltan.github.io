module Jekyll
  class TagPageGenerator < Generator
    safe true

    def generate(site)
      tags = Set.new
      
      site.posts.docs.each do |post|
        if post.data['tags']
          post.data['tags'].each { |tag| tags << tag }
        end
      end

      tags.each do |tag|
        site.pages << TagPage.new(site, tag)
      end
    end
  end

  class TagPage < Page
    def initialize(site, tag)
      @site = site
      @base = site.source
      @dir = File.join('tags', tag.downcase)
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(@base, '_layouts'), 'tag.html')
      self.data['tag'] = tag
      self.data['title'] = "Posts tagged ##{tag}"
    end
  end
end 