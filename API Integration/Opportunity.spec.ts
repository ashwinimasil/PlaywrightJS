import { test } from "@playwright/test"

let url: any
let token: any
let opportunity_id: any

test("Opportunity", async ({ request }) => {

    const response = await request.post("https://login.salesforce.com/services/oauth2/token",
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "grant_type": "password",
                "client_id": "3MVG9pRzvMkjMb6lZlt3YjDQwe0hk0f5ZPyWD38tfPYQ75KXUzZBGzM_c7I0o3yc6ua1IUk6lEQIy4U2sByrg",
                "client_secret": "79FFF874D54193B377A60354C71CBBE83120AD28A5D6BC536D2F68C94645DE98",
                "username": "ashwinimasil.93511f8da6e5@agentforce.com",
                "password": "Masil123$I3Wvun52M4DvynB7FvWBNWhM"
            }

        }
    )

    const responsebody = await response.json()
    console.log(responsebody)
    url = responsebody.instance_url
    token = responsebody.access_token
    console.log(response.status());
    console.log(response.statusText());
    console.log(url)
}
)
//create opportunity

test("create opportunity", async ({ request }) => {

    const response = await request.post(`${url}/services/data/v59.0/sobjects/Opportunity`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: {
                "CloseDate": "2025-03-15",
                "StageName": "Prospecting",
                "Name": "Opportunity"
            }

        }
    )

    let responsebody = await response.json()
    opportunity_id = responsebody.id
    console.log(response.status());
    console.log(response.statusText())
    console.log(opportunity_id);

}
)

test("get opportunity", async ({ request }) => {

    const response = await request.patch(`${url}/services/data/v59.0/sobjects/Opportunity/${opportunity_id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            data: {
                "StageName": "Prospecting",
                "Type": "New Customer"
            }

        }
    )
    console.log("Update");
    console.log(response.statusText);
    console.log(response.status());

}

)
test("Delete opportunity", async ({ request }) => {

    const response = await request.delete(`${url}/services/data/v59.0/sobjects/Opportunity/${opportunity_id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }

        }
    )
    const responsebody = await response.json()
    console.log(response.status());
    console.log(response.statusText());

}
)






