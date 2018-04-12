#Countdown to Code Challenge 
===========================
Tomorrow at 10 a.m. 

See it in action here:<a href="http://www.codechallengecountdown.herokuapp.com/">Code Challenge Countdown</a>.

## To get the countdown to work in production:
I removed "turbolinks" gem. 

I added the source files for the styling and javascript of Flipclock.js and flipclock.css as well as the js file for the specific controller action 'visitors#index' in the config/initializers/assets.rb file. 
```
Rails.application.config.assets.precompile += %w( insert_name_of_file.file_extension ) 
```
This fixed the production environment failing to precompile the assets needed to show the jQuery Counter. 

For a full review of changes made, please review the ```git log```. 

# Code Challenge Countdown (The Final Countdown Upgrade)

I volunteered to build a countdown web app to next lecture at the Flatiron School. I built the ```final_countdown```, but then, prior to the code challenge on Friday, I built a second countdown using ```FlipClock.js``` . Here's what I built. 

## To run locally

'git clone' the repo and cd' into your project directory, run 'bundle install', then run 'rails s' 

You should see a site that looks like <a href="http://www.codechallengecountdown.herokuapp.com/">Code Challenge Countdown</a>

## Help Developing This

I used <a href="http://flipclockjs.com/">FlipClock.js</a> to build this countdown to the code challenge. This application was generated with the rails_apps_composer gem: https://github.com/RailsApps/rails_apps_composer
provided by the RailsApps Project: http://railsapps.github.io/.

# Reflections 
I accomplished a lot of the goals that I set for myself in the Final Countdown Readme.md, which were to style the countdown, as well as make it work in production. 

# Contributor's Guide: 

Add additional features and submit a pull request

License: <a href="https://creativecommons.org/licenses/by/4.0/">CC 4.0</a>




