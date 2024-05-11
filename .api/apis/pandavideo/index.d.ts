import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Get all users from organization
     *
     * @throws FetchError<400, types.GetAllUsersFromOrganizationResponse400> 400
     * @throws FetchError<401, types.GetAllUsersFromOrganizationResponse401> 401
     * @throws FetchError<500, types.GetAllUsersFromOrganizationResponse500> 500
     */
    getAllUsersFromOrganization(): Promise<FetchResponse<200, types.GetAllUsersFromOrganizationResponse200>>;
    /**
     * Create user for organization
     *
     * @throws FetchError<400, types.CreateUserFromOrganizationResponse400> 400
     * @throws FetchError<401, types.CreateUserFromOrganizationResponse401> 401
     * @throws FetchError<500, types.CreateUserFromOrganizationResponse500> 500
     */
    createUserFromOrganization(body?: types.CreateUserFromOrganizationBodyParam): Promise<FetchResponse<200, types.CreateUserFromOrganizationResponse200>>;
    /**
     * Update user from organization
     *
     * @throws FetchError<400, types.UpdateUserFromOrganizationResponse400> 400
     * @throws FetchError<401, types.UpdateUserFromOrganizationResponse401> 401
     * @throws FetchError<500, types.UpdateUserFromOrganizationResponse500> 500
     */
    updateUserFromOrganization(body: types.UpdateUserFromOrganizationBodyParam, metadata: types.UpdateUserFromOrganizationMetadataParam): Promise<FetchResponse<200, types.UpdateUserFromOrganizationResponse200>>;
    updateUserFromOrganization(metadata: types.UpdateUserFromOrganizationMetadataParam): Promise<FetchResponse<200, types.UpdateUserFromOrganizationResponse200>>;
    /**
     * Remove user from organization
     *
     * @throws FetchError<400, types.RemoveUserFromOrganizationResponse400> 400
     * @throws FetchError<401, types.RemoveUserFromOrganizationResponse401> 401
     * @throws FetchError<500, types.RemoveUserFromOrganizationResponse500> 500
     */
    removeUserFromOrganization(metadata: types.RemoveUserFromOrganizationMetadataParam): Promise<FetchResponse<200, types.RemoveUserFromOrganizationResponse200>>;
    /**
     * Get user from organization
     *
     * @throws FetchError<400, types.GetUserFromOrganizationResponse400> 400
     * @throws FetchError<401, types.GetUserFromOrganizationResponse401> 401
     * @throws FetchError<500, types.GetUserFromOrganizationResponse500> 500
     */
    getUserFromOrganization(metadata: types.GetUserFromOrganizationMetadataParam): Promise<FetchResponse<200, types.GetUserFromOrganizationResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
