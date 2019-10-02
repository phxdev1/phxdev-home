---
title: Configuring Azure Cloud Discovery
date: 2019-10-02T18:00:29.792Z
thumb_img_path: /images/microsoft-azure-cloud.png
layout: post
---
I really just need to save this for later, but I'm guessing some of you will have the same issues I have. It seems that the ServiceNow documentation is a little out of date when configuring the Azure Clouad Discovery. It seems as though the [documentation found here](https://docs.servicenow.com/bundle/istanbul-it-operations-management/page/product/azure-cloud-provisioning/task/t_CollectAzureClientTenantID.html) is referencing some older terms which are now changed. Client ID is now called Application ID and Tenant ID is called Directory ID.

I banged my head on this for a while, fixed it, forgot it and then rediscovered it again for one of my clients. These are my instructions to configure Azure Cloud Discovery for ServiceNow:

1. Log in to the Azure portal.
2. Click “Azure Active Directory”.
3. In the left pane, click “App registrations”.

![App Registrations](/images/app-registrations.png)

4. At the top, create “New Registration”.”
5. Enter a name for this Application. I suggest using something similar to “ServiceNow Azure Cloud Discovery”. Keep the “Supported account types” option selected as “Accounts in this organizational directory only” selected. You will not need to specify a Redirect URI.
6. On the next page, take note of the Application (client) ID and the Directory (tenant ID). These are going to be GUIDs, for example “d85131e4-1763-42d6-b9c7-b6bad64b3a51”. These are what we will need to start configuring Azure Discovery. 

![Application and Directory ID GUIDS](/images/guids.png)

Hope this helps somebody save some time in the future!
