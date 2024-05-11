declare const CreateUserFromOrganization: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
                readonly description: "The email address of the user.";
            };
            readonly role_id: {
                readonly type: "string";
                readonly description: "The role ID assigned to the user.";
            };
            readonly phone: {
                readonly type: "string";
                readonly description: "The phone number of the user.";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly organization_id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly role_id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly phone: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly errCode: {
                    readonly type: "string";
                    readonly examples: readonly ["BadRequest"];
                };
                readonly errMsg: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal server error"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetAllUsersFromOrganization: {
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                    readonly organization_id: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                    readonly role_id: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                    readonly email: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                    readonly status: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                    readonly updated_at: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly examples: readonly ["string"];
                    };
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly errCode: {
                    readonly type: "string";
                    readonly examples: readonly ["BadRequest"];
                };
                readonly errMsg: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal server error"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const GetUserFromOrganization: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly user_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["user_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly organization_id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly role_id: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly email: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly phone: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly updated_at: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly errCode: {
                    readonly type: "string";
                    readonly examples: readonly ["BadRequest"];
                };
                readonly errMsg: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal server error"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const RemoveUserFromOrganization: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly user_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["user_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly errCode: {
                    readonly type: "string";
                    readonly examples: readonly ["BadRequest"];
                };
                readonly errMsg: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal server error"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
declare const UpdateUserFromOrganization: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly email: {
                readonly type: "string";
            };
            readonly role_id: {
                readonly type: "string";
            };
            readonly phone: {
                readonly type: "string";
            };
            readonly image_id: {
                readonly type: "string";
            };
        };
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly user_id: {
                    readonly type: "string";
                    readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
                };
            };
            readonly required: readonly ["user_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly errCode: {
                    readonly type: "string";
                    readonly examples: readonly ["BadRequest"];
                };
                readonly errMsg: {
                    readonly type: "string";
                    readonly examples: readonly ["string"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Unauthorized"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly examples: readonly ["Internal server error"];
                };
            };
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { CreateUserFromOrganization, GetAllUsersFromOrganization, GetUserFromOrganization, RemoveUserFromOrganization, UpdateUserFromOrganization };
