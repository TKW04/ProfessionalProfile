import { userActions } from "./user-slice";
import { getToken } from "../../helpers/token";

// export const GetProfiles = (showError, showWarning) => {
//   return async (dispatch) => {
//     const GetProfilesInfo = async () => {
//       return await fetch(`${import.meta.env.VITE_APP_API_URL}users`, {
//         method: "GET",
//         headers: {
//           Authorization: getToken(),
//         },
//       });
//     };

//     try {
//       const response = await GetProfilesInfo();
//       console.log(response);

//       if (response.status === 200) {
//         const users = await response.json();
//         console.log(users);

//         dispatch(
//           userActions.setusers({
//             users: users.map((user) => ({
//               id: user.id,
//               given_name: user.given_name,
//               family_name: user.family_name,
//               email: user.email,
//               role: user.role,
//               status: user.status,
//             })),
//           })
//         );
//       } else {
//         showWarning(
//           "No se pudieron obtener los usuarios",
//           "No se encontraron usuarios o no tienes permisos para verlos"
//         );
//       }
//     } catch (error) {
//       console.log(error);
//       showError("Error!", "No se pudieron obtener los usuarios");
//     }
//   };
// };
export const CreateProfile = (profile, showError, showWarning, showSuccess) => {
  return async () => {
    const CreateProfileInfo = async () => {
      return await fetch(`${import.meta.env.VITE_APP_API_URL}profiles`, {
        method: "POST",
        body: JSON.stringify({
          first_name: profile.first_name,
          last_name: profile.last_name,
          email: profile.email,
          title: profile.title,
          phone: profile.phone,
          about_me: profile.about_me,
          social_links: profile.social_links,
          skills: profile.skills,
          projects: profile.projects,
          experience: profile.experience,
          education: profile.education,
          password: profile.password,
          savedPalette: profile.saved_palette,
        }),
        headers: {
          "Content-Type": "application/json"
        },
      });
    };

    try {
      const response = await CreateProfileInfo();
      if (response.status === 200) {
      const uploadProfileImage = await response.json();
      //sube la imagen
      await fetch(uploadProfileImage.data.profile_picture_info.upload_url, {
        method: "PUT",
        body: profile.image,
      });
      showSuccess("Perfil creado", uploadProfileImage.message);
        setTimeout(() => {
          window.location.href = "/login";
        }, 4500);
      } else {
        showWarning("No se pudo crear el perfil", uploadProfileImage.message);
      }
    } catch (error) {
      console.log(error);
      showError("Error!", "No se pudo crear el perfil");
    }
  };
};
// export const UpdateProfile = (user, showError, showWarning, showSuccess) => {
//   return async () => {
//     const UpdateProfileInfo = async () => {
//       return await fetch(
//         `${import.meta.env.VITE_APP_API_URL}users/${user.id}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: getToken(),
//           },
//           body: JSON.stringify({
//             given_name: user.given_name,
//             family_name: user.family_name,
//             role: user.role,
//             password: user.password,
//           }),
//         }
//       );
//     };
//     try {
//       const response = await UpdateProfileInfo();
//       if (response.status === 200) {
//         showSuccess("Usuario actualizado", "Usuario actualizado con éxito");
//         setTimeout(() => {
//           window.location.reload();
//         }, 4500);
//       } else {
//         showWarning(
//           "No se pudo actualizar el usuario",
//           "Valide los datos ingresados"
//         );
//       }
//     } catch (error) {
//       console.log(error);
//       showError("Error!", "No se pudieron obtener los usuarios");
//     }
//   };
// };
// export const ActivateProfile = (userId, showError, showWarning, showSuccess) => {
//   return async () => {
//     const UpdateProfileInfo = async () => {
//       return await fetch(
//         `${import.meta.env.VITE_APP_API_URL}users/active/${userId}`,
//         {
//           method: "PUT",
//           headers: {
//             Authorization: getToken(),
//           },
//         }
//       );
//     };
//     try {
//       const response = await UpdateProfileInfo();
//       if (response.status === 200) {
//         showSuccess("Usuario activado", "Usuario activado con éxito");
//         setTimeout(() => {
//           window.location.reload();
//         }, 4500);
//       } else {
//         showWarning(
//           "No se pudo actualizar el usuario",
//           "Valide los datos ingresados"
//         );
//       }
//     } catch (error) {
//       console.log(error);
//       showError("Error!", "No se pudieron obtener los usuarios");
//     }
//   };
// };
// export const InactivateProfile = (userId, showError, showWarning, showSuccess) => {
//   return async () => {
//     const UpdateProfileInfo = async () => {
//       return await fetch(
//         `${import.meta.env.VITE_APP_API_URL}users/inactive/${userId}`,
//         {
//           method: "PUT",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: getToken(),
//           },
//         }
//       );
//     };
//     try {
//       const response = await UpdateProfileInfo();
//       if (response.status === 200) {
//         showSuccess("Usuario inactivado", "Usuario inactivado con éxito");
//         setTimeout(() => {
//           window.location.reload();
//         }, 4500);
//       } else {
//         showWarning(
//           "No se pudo actualizar el usuario",
//           "Valide los datos ingresados"
//         );
//       }
//     } catch (error) {
//       console.log(error);
//       showError("Error!", "No se pudieron obtener los usuarios");
//     }
//   };
// };
