import * as React from 'react';
import { DefaultPropsInterface } from '@/interfaces/object.interface';
import { stringToCurrency } from './number.helper';

interface FieldRules {
    name: string;
    required: boolean;
    min: number;
    minValue: number | boolean;
}

export interface FieldRulesObject {
    [key: string]: FieldRules;
}

export interface ValidationRulesResult {
    code: 200 | 500;
    message: string;
}

interface StateTypes {
    rulesField: FieldRulesObject;
    validationRules: {
        [key: string]: (
            key: string,
            val: string,
            specification: any
        ) => ValidationRulesResult;
    };
    error: string;
}

export default function formValidation(
    WrappedComponent: any,
    rules: FieldRulesObject
): any {
    return class extends React.Component<DefaultPropsInterface, StateTypes> {
        constructor(props: DefaultPropsInterface) {
            super(props);

            this.state = {
                rulesField: rules,
                validationRules: {
                    required: (
                        key: string,
                        val: string,
                        specification: any
                    ) => this.validateRequired(key, val, specification),
                    min: (
                        key: string,
                        val: string,
                        specification: any
                    ) => this.validateMin(key, val, specification),
                    minValue: (
                        key: string,
                        val: string,
                        specification: any
                    ) => this.validateMinValue(key, val, specification),
                    rest: (
                        key: string,
                        val: string,
                        specification: any
                    ) => this.validateRest(key, val, specification)
                },
                error: ''
            };
            this.validate = this.validate.bind(this);
            this.onResetValidate = this.onResetValidate.bind(this);
        }

        onResetValidate() {
            this.setState({ error: '' });
        }

        validate(key: string, value: string): ValidationRulesResult {
            const { rulesField, validationRules } = this.state;
            const field = rulesField[key];

            if (key !== 'rest') {
                const validateRequired = validationRules.required(
                    field.name,
                    value,
                    field.required
                );
                const validateMinText = validationRules.min(field.name, value, field.min);
                const validateMinValue = validationRules.minValue(
                    field.name,
                    value,
                    field.minValue
                );

                if (validateRequired.code === 500) {
                    this.setState({ error: validateRequired.message });
                    return validateRequired;
                }

                if (validateMinText.code === 500) {
                    this.setState({ error: validateMinText.message });
                    return validateMinText;
                }

                if (validateMinValue.code === 500) {
                    this.setState({ error: validateMinValue.message });
                    return validateMinValue;
                }
            }

            if (key === 'rest') {
                this.setState({ error: value });

                return {
                    code: 500,
                    message: value
                };
            }

            this.setState({ error: '' });
            return {
                code: 200,
                message: ''
            };
        }

        validateRequired(key: string, val: string, _: any): ValidationRulesResult {
            /**
             * Comment cause i think all field is required
             */
            // if (!_) {
            //     return {
            //         code: 200,
            //         message: ''
            //     };
            // }

            const valid = val !== '';
            return {
                code: valid ? 200 : 500,
                message: valid ? '' : `Oops ${key} is required`
            };
        }

        validateMin(key: string, val: string, specification: any): ValidationRulesResult {
            const valid = val.length > specification;

            return {
                code: valid ? 200 : 500,
                message: valid ? '' : `Oops min field ${key} is ${specification} character`
            };
        }

        validateMinValue(key: string, val: string, specification: any): ValidationRulesResult {
            if (specification === false) {
                return {
                    code: 200,
                    message: ''
                };
            }

            const valid = parseInt(val, 10) >= specification;

            return {
                code: valid ? 200 : 500,
                message: valid ? '' : `Oops min field ${key} is ${stringToCurrency(specification)}`
            };
        }

        validateRest(key: string, val: string, specification: any): ValidationRulesResult {
            const valid = val.length > specification;

            return {
                code: valid ? 200 : 500,
                message: valid ? '' : `Oops min field ${key} is ${specification} character`
            };
        }

        render() {
            const { error } = this.state;

            return (
                <WrappedComponent
                    validate={this.validate}
                    error={error}
                    onResetValidate={this.onResetValidate}
                    {...this.props}
                />
            );
        }
    };
}
