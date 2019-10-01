module Mutations
  class UpdateProjectMutation < Mutations::BaseMutation
    argument :id, ID, required: true
    argument :attributes, Types::ProjectAttributes, required: true

    field :project, Types::ProjectType, null: true
    field :errors, Types::ValidationErrorsType, null: true

    def resolve(id:, attributes:)
      check_authentication!

      project = Project.find(id)

      if project.update(attributes.to_h)
        ProjectTrackerSchema.subscriptions.trigger('projectUpdated', {}, project)
        { project: project }
      else
        { errors: project.errors }
      end
    end
  end
end
