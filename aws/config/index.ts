// Copyright 2016-2017, Pulumi Corporation.  All rights reserved.

import * as pulumi from "pulumi";

let _config = new pulumi.Config("cloud-aws:config");

export let ecsClusterARN = _config.get("ecsClusterARN");
export let ecsClusterSubnets = _config.get("ecsClusterSubnets");
export let ecsClusterVpcId = _config.get("ecsClusterVpcId");
