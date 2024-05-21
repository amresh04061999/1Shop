
import { toast } from "react-toastify";
import axios from "axios";
import environment from "../../../../environments/environment";

const postUser: any = async (values, setSubmitting, resetForm, onClick) => {
    const BaseURL:string = environment.baseUrl;
       try {
            const res = await axios.post(`${BaseURL}users.json`, values, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (res) {
                toast.success('Success Resgistration!');
            }
            resetForm();
            onClick('login');
''
        } catch(error:any) {
            if (error.response) {
                // Server responded with a status other than 2xx
                toast.error(`Error: ${error.response.data.message || 'An error occurred!'}`);
            } else if (error.request) {
                // Request was made but no response received
                toast.warning('Warning: No response from the server. Please try again later.');
            } else {
                // Something else caused the error
                toast.error(`Error: ${error.message}`);
            }
        }finally{
            setSubmitting(false);
        }
    

    }
export default postUser