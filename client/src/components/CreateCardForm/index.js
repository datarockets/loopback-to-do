import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBody, Input } from 'mdbreact'

const CreateCardForm = props => (
  <div className="col-sm-3 mx-auto">
    <Card>
      <CardBody>
        <form className="text-left" onSubmit={props.createCard}>
          <Input
            value={props.description}
            onChange={props.setDescription}
            icon="list prefix grey-text left"
            label="What to do?"
          />
          <div className="col-sm-4 mx-auto">
            <Input
              type='submit'
              value='Add'
              className="btn btn-deep-orange waves-effect waves-light"
            />
          </div>
        </form>
      </CardBody>
    </Card>
  </div>
)

CreateCardForm.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  createCard: PropTypes.func.isRequired,
}

export default CreateCardForm
