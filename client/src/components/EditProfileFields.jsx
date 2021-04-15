import { Grid } from "@material-ui/core"
import './profile.css'
import Button from './Button'

//TODO: Handle button handler when endpoint is defined
//PROPS
/*
{
    userId: integer that contains the id of the user
}
*/
const EditProfileFields = (props) => {
    //TODO:Query names using userId
    const name = "Thomas DeSantis"
    const email = "thomasdesantis22@gmail.com"
    const phone = "978-000-0000"
    return(
        <section className = "projectContainer">
            <div class = "topMargin"/>
            <form>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div class="flexContainer">
                        <div class="fieldContainer">
                            <p>Name:</p>
                        </div>
                        <div class="fieldContentContainer">
                            <p>{name}</p>
                        </div>
                    </div>
                    <div class="flexContainer">
                        <div class="fieldContainer">
                            <p>Phone:</p>
                        </div>
                        <div class="fieldContentContainer">
                            <p>{phone}</p>
                        </div>
                    </div>   
                    <Button label = "Submit"/>
                </Grid>
            </form>
        </section>
    )
}

export default EditProfileFields