# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# converts camelCase for all JBuilder keys
Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true
