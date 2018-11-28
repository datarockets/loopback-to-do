import React from 'react'
import PropTypes from 'prop-types'
import {
  Card, CardBody, Input, Button,
} from 'mdbreact'

const CreateCardForm = props => (
  <div className="col-sm-3 mx-auto">
    <Card>
      <CardBody>
        <form className="text-left" onSubmit={props.onSubmit}>
          <Input
            value={props.description}
            onChange={props.onChange}
            icon="list prefix grey-text left"
            label="What to do?"
          />
          <div className="text-center">
            <Button size="sm" type="submit">Add</Button>
          </div>
        </form>
      </CardBody>
    </Card>
  </div>
)

CreateCardForm.propTypes = {
  description: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default CreateCardForm
