module Types
  class ProjectAttributes < Types::BaseInputObject
    description 'Attributes for creating or updating projects'

    argument :title, String, required: true
    argument :description, String, required: false
    argument :is_completed, Boolean, required: false
  end
end
