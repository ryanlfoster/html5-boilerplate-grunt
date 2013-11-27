# Sass with Compass
guard 'compass', :configuration_file => 'Compass.rb'

# Sprockets for JS
guard 'sprockets', :destination => 'public/javascripts', :asset_paths => ['scripts'], :minify => false, :root_file => ['scripts/main.js'] do
  watch %r{scripts/(.+)\.js}
end

# JS Hint
guard 'jshint-node', :config => 'JSHint.json' do
    watch %r{source/(.+)\.js}
end

# Live reload
guard 'livereload', :apply_js_live => true, :apply_css_live => true do
  watch(%r{public/stylesheets/(.+)\.css})
  watch(%r{public/javascripts/(.+)\.js})
  watch(%r{public/(.+)\.html})
end
