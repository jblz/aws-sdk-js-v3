import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import { CreateHarvestJobCommandInput, CreateHarvestJobCommandOutput } from "./commands/CreateHarvestJobCommand";
import {
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput,
} from "./commands/CreateOriginEndpointCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import {
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput,
} from "./commands/DeleteOriginEndpointCommand";
import { DescribeChannelCommandInput, DescribeChannelCommandOutput } from "./commands/DescribeChannelCommand";
import { DescribeHarvestJobCommandInput, DescribeHarvestJobCommandOutput } from "./commands/DescribeHarvestJobCommand";
import {
  DescribeOriginEndpointCommandInput,
  DescribeOriginEndpointCommandOutput,
} from "./commands/DescribeOriginEndpointCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import { ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput } from "./commands/ListHarvestJobsCommand";
import {
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "./commands/ListOriginEndpointsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RotateChannelCredentialsCommandInput,
  RotateChannelCredentialsCommandOutput,
} from "./commands/RotateChannelCredentialsCommand";
import {
  RotateIngestEndpointCredentialsCommandInput,
  RotateIngestEndpointCredentialsCommandOutput,
} from "./commands/RotateIngestEndpointCredentialsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import {
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
} from "./commands/UpdateOriginEndpointCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateChannelCommandInput
  | CreateHarvestJobCommandInput
  | CreateOriginEndpointCommandInput
  | DeleteChannelCommandInput
  | DeleteOriginEndpointCommandInput
  | DescribeChannelCommandInput
  | DescribeHarvestJobCommandInput
  | DescribeOriginEndpointCommandInput
  | ListChannelsCommandInput
  | ListHarvestJobsCommandInput
  | ListOriginEndpointsCommandInput
  | ListTagsForResourceCommandInput
  | RotateChannelCredentialsCommandInput
  | RotateIngestEndpointCredentialsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput
  | UpdateOriginEndpointCommandInput;

export type ServiceOutputTypes =
  | CreateChannelCommandOutput
  | CreateHarvestJobCommandOutput
  | CreateOriginEndpointCommandOutput
  | DeleteChannelCommandOutput
  | DeleteOriginEndpointCommandOutput
  | DescribeChannelCommandOutput
  | DescribeHarvestJobCommandOutput
  | DescribeOriginEndpointCommandOutput
  | ListChannelsCommandOutput
  | ListHarvestJobsCommandOutput
  | ListOriginEndpointsCommandOutput
  | ListTagsForResourceCommandOutput
  | RotateChannelCredentialsCommandOutput
  | RotateIngestEndpointCredentialsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput
  | UpdateOriginEndpointCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type MediaPackageClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type MediaPackageClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * AWS Elemental MediaPackage
 */
export class MediaPackageClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MediaPackageClientResolvedConfig
> {
  readonly config: MediaPackageClientResolvedConfig;

  constructor(configuration: MediaPackageClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
