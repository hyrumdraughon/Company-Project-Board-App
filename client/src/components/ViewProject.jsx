import { Grid } from "@material-ui/core"
import './project.css'
import Button from './Button'

const ViewProject = ({projectTitle,projectTeamName,projectDescription,projectID}) => {
    const completeButtonProps = {label:'Complete',handleClick:null}
    return(
        <section class = "projectContainer">
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div class = "projectContainerBox">
                    <p>Project Title</p>
                </div>
                <div class = "projectContainerBox">
                    <p>Team Name</p>
                </div>
                <div class = "projectDescriptionBox">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper et ipsum et tincidunt. Sed ornare risus pulvinar, aliquet enim nec, sollicitudin lectus. Duis at ex est. Quisque dignissim odio non varius dapibus. Mauris molestie sit amet ipsum non feugiat. Nunc pulvinar libero nec justo condimentum commodo. Phasellus faucibus elit libero. Nulla bibendum metus et tincidunt interdum. Vivamus gravida, justo et ornare tincidunt, turpis eros convallis urna, id consequat urna metus eget sem. Praesent vestibulum porta metus sed suscipit. Aliquam erat volutpat. Aenean fringilla mauris et ultrices accumsan. Proin malesuada neque ac nunc feugiat tincidunt. Sed in mauris vitae velit consequat ornare vitae at dolor. Suspendisse semper imperdiet mauris vitae blandit. Nunc semper vel lectus sed pharetra.

Nunc in metus volutpat nisl egestas condimentum nec at magna. Curabitur eget auctor tellus. Curabitur ante ligula, molestie ac tellus at, rhoncus eleifend mi. Fusce viverra urna libero, ac tincidunt diam tincidunt id. Nam nec neque vitae lectus viverra commodo. In ac augue orci. Suspendisse aliquam massa ac magna imperdiet rutrum. Etiam in vestibulum nunc, ut consectetur ligula. Proin purus arcu, gravida ut malesuada at, lobortis vitae neque. Sed non nulla eget libero tincidunt luctus id vel mi. Suspendisse laoreet risus eget dapibus tristique. Mauris lectus est, molestie ac ante et, ultricies vestibulum tortor. Vivamus sit amet dolor dolor.

Sed mauris ante, fringilla at rhoncus a, posuere in nulla. In congue elit eget lectus laoreet pharetra. Nam sed faucibus mi. Pellentesque consectetur nulla in nunc interdum, eu placerat mauris consequat. Integer porta lacus purus, vel ornare massa dapibus id. In suscipit pulvinar convallis. Maecenas augue massa, dictum eu sagittis et, mollis a metus. Vivamus feugiat mi id diam ornare, finibus sollicitudin leo ultrices. Ut semper libero orci, et gravida sem molestie a. Donec pellentesque, velit sed varius bibendum, dui justo dignissim nibh, vel pellentesque diam lorem sit amet orci. Quisque bibendum augue at sapien rhoncus, cursus porttitor tortor semper. Suspendisse dignissim varius mauris, at rutrum ante mattis et.

Praesent posuere tincidunt felis, ut vulputate purus pharetra quis. Praesent et mauris id diam posuere pulvinar non at nisi. Quisque sem dolor, consectetur nec dui posuere, pharetra bibendum odio. Mauris eleifend mattis nulla, vel eleifend mauris pulvinar eu. Donec euismod arcu volutpat posuere posuere. Ut maximus fringilla est, at gravida libero ullamcorper mollis. Donec suscipit condimentum feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sollicitudin eros eget ante ullamcorper viverra. Aliquam tincidunt sapien risus, et bibendum orci eleifend non. Aliquam et quam ac purus scelerisque vestibulum quis a enim. Vivamus tempus magna vitae lectus semper volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris at tempus tortor. Cras vitae faucibus nunc. Aliquam a ipsum sed ante interdum hendrerit.

Nam cursus magna ut erat pretium, ac hendrerit urna ullamcorper. Nulla vehicula non tortor vel varius. Mauris suscipit, sapien vel egestas venenatis, sem erat vestibulum diam, ut bibendum tellus elit non velit. Vivamus molestie efficitur molestie. Vestibulum tincidunt sem ut mi auctor ultrices. Mauris nec malesuada neque. Praesent porta a risus ac venenatis.</p>
                </div>
                <Button>({completeButtonProps})</Button>
            </Grid>
        </section>
    )
}

export default ViewProject