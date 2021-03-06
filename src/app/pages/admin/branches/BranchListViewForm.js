import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { safe } from 'common/Functions'

let BranchListViewForm = props => {
    const { error, handleSubmit, submitSucceeded, pristine, submitting, onValidate, successMessage } = props;

        return (
        <div className="login-panel panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Edit branch</h3>
            </div>

            <div className="panel-body">
                {!submitting && error && <div className="alert alert-danger">{error}</div>}
                {!submitting && submitSucceeded && !error && <div className="alert alert-success">Branch Updated</div>}
                <form onSubmit={handleSubmit(onValidate)}>
                    <fieldset>
                        <div className="form-group">
                        <label>Name of branch</label>
                        <Field
                        name="name"
                        className="form-control"
                        component="input"
                        type="text"
                        placeholder="Name"
                            />
                        <p className="help-block">Example block-level help text here.</p>
                        </div>

                        <button type="submit" className="btn btn-default btn-success"> Update</button>
                        <button type="reset" className="btn btn-default">Reset Button</button>

                    </fieldset>
                </form>
            </div>
        </div>
    );
};

BranchListViewForm = reduxForm({
    form: 'branchlistviewForm',
})(BranchListViewForm);

const mapStateToProps = (state, ownProps) => {

    return {
        //formSubmitted: safe(state.form, ['BranchListViewForm', 'submitSucceeded'], false),
        initialValues: ownProps.initial, // pull initial values from account reducer
        hideLoading: PropTypes.func.isRequired,
        showLoading: PropTypes.func.isRequired
    }
};

BranchListViewForm = connect(
        mapStateToProps,
{  } // bind account loading action creator
)(BranchListViewForm);

export default BranchListViewForm;
