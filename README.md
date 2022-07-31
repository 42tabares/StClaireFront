# St Claire Web App 🏥

The St Claire Web App allows you to manage medical specialties, users within each specialty and appointment dates for each user!

Here below is a list of steps to install and run!

## Installation

1. Download both this repo and the back-end repo https://github.com/42tabares/StClaireBack
2. Launch a MySQL workbench server in local host port 3306.
3. Create a schema named "stclaire" do not edit it, the program just need the schema to exist.
4. Input your user data to the application.properties files in StClaireBack/src/main/resources

- Be advised, you may change the port and schema name in the application.properties too if your MySQL config is different!

5. Launch the server with StClaireApplication.java from your prefered Java IDE.
6. Launch the front-end with a Live Server, I might suggest the https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer addon for VScode
7. The application should now be running properly.

## Features

![image](https://user-images.githubusercontent.com/102557453/182039547-cbf79589-224e-4f5f-b725-7b32b8e1ee19.png)

The app is divided into two main sections: **The Control Panel** and the **Specialties and Users Panel**

The control panel is used to Add and Edit Specialties, Add users and will display patients appointments when selected.

The specialties and users panel will display all created specialties and patients, here you can **select** them to edit them in the control panel.

### Add Specialty

![image](https://user-images.githubusercontent.com/102557453/182039765-06aa6405-ca19-433f-82ab-b73d5a044292.png)

- Specialties have a name and a physician in charge.
- The Specialty name must be between 5 and 100 characters long.
- The Physician name must be between 10 and 40 characters long.
- You may only delete the specialty if the specialty has no patients.

### Edit Specialty

![image](https://user-images.githubusercontent.com/102557453/182039962-554fcc38-170f-4b08-a239-e875e882db9a.png)

![image](https://user-images.githubusercontent.com/102557453/182039984-202a62fb-2a67-41c5-8929-b55e6762e77f.png)

- Use the Edit Specialty to edit the specialty's fields.
- Same rules of adding fields apply when updating them.
- Upon submititing the edit, the page will reload with the updated field

### Add / Delete user

![image](https://user-images.githubusercontent.com/102557453/182040120-4724e5e1-9393-4a5d-abea-4f78ad18174a.png)

![image](https://user-images.githubusercontent.com/102557453/182040205-7592c2b8-75ef-482a-ac6d-e1e60127bd6c.png)

- Use the dropdown menu to select the specialty you will add the patient in
- The patient name must be between 10 and 40 characters long.
- The patient age must be 0 at minimal
- You may delete the user with the Delete button below his card in the specialty

### Display / Add / Delete appointments

![image](https://user-images.githubusercontent.com/102557453/182040369-9ff34077-b412-4321-b4c9-ef1a9909375a.png)

- In the specialties and users panel, click the appointments button of a user to display his appointments
- The appointment manager will open in the control panel, here you can add or delete appointments

![image](https://user-images.githubusercontent.com/102557453/182040558-232b3428-71c5-4b12-baf5-e46cc91daf99.png)

- Notice the number of appointments of the user will update automatically
- You may delete an appointment with the X button by the side of its date



