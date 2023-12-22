// # Git Collaboration (Part-2)

// # ****Collaborating on GitHub****

// - In the [last tutorial](https://www.notion.so/Introduction-to-Git-e1ba45b16e044e30aaba1c3ce10cd4f3?pvs=21), we learnt about the basics of GitHub. In this tutorial, we will combine all those basics and get to experience the real power of GitHub which comes from collaboration.
// - Please note, in this tutorial, we will be frequently using words like cloning, push, pull, branches, master, etc. Therefore, if you are not clear on any of these, please read through the [last tutorial](https://www.notion.so/Introduction-to-Git-e1ba45b16e044e30aaba1c3ce10cd4f3?pvs=21) first.

// ## ****Defining Collaboration:****

// - Collaboration is the way different people can work on the same project together. It is like creating a group in **[GitHub](https://www.geeksforgeeks.org/ultimate-guide-git-github/)** just like Groups in other social media.
// - The people added to the collaborator’s list can be able to push, merge, and do similar kinds of things on the project.

// Let’s understand some basic terminologies we will be using throughout this tutorial:

// - **Collaborator** — A developer who is **formally added to the project repository** and is given the **push access** (access to modify the content of the repository) is called as a contributor or collaborator
// - **Branch** — Generally, developers **use different branches for maintaining different modules of the project**. Another common scenario that warrants the use of branches is when **multiple members of the team want to work on the same piece of code.** This is when each one can have its own branch. By default, **each newly created repository has a central branch** named “***master***” branch. More details about branches is explained below.
// - **Pull Request** — A pull request is created **to merge a branch with the “*master*” branch**. The request goes directly to the project owner and he/she can work with the branch contributor to accept/ reject the edits.

// ---

// - Now we will run through 2 scenarios which you can encounter when actively collaborating on GitHub:
//     - In the **first scenario** you will be setting up a project and inviting collaborators
//     - In the **second scenario** we will see how the collaborators whom you have invited can work on your project
    

// ## ****Scenario 1:****

// To set up project follow these steps

// - Go to the main GitHub page and click on the “*+*” icon in the menu bar. Once you click on this button, a new menu appears with a “*New repository*” entry. Click on it!

// ![Screenshot 2022-04-22 at 11.11.23 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56f0d245-2379-4e45-baf3-b3719895a90a/Screenshot_2022-04-22_at_11.11.23_PM.png)

// - [The repository creation page](https://github.com/new) will appear. Choose a cool name for your repository and put a small description before clicking on the “*Create repository*” button

// ![Screenshot 2022-04-22 at 11.14.24 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/30459147-be86-4e71-ac3a-83bc9146b811/Screenshot_2022-04-22_at_11.14.24_PM.png)

// - Now get a copy of the repository on your computer. To do that, you need to “*clone*” the repository. On the repository page, you need to get the “*HTTPS*” address.

// ![Screenshot 2022-04-22 at 11.18.36 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8ce4c208-7f7a-41e8-8a18-c947078ce297/Screenshot_2022-04-22_at_11.18.36_PM.png)

// - Once you have the address of the repositories, you need to use your terminal (through shell commands) to move in the place where you want to put the directory copy (for example you can move in your “*Documents*” folder). When you are ready, you can enter:

// ```jsx
// $ git clone [HTTPS ADDRESS]
// ```

// ![Screenshot 2022-04-22 at 11.22.06 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9f6d633-4ea1-4459-a27a-4dc8ad37a3cb/Screenshot_2022-04-22_at_11.22.06_PM.png)

// - Now you can add all of your files to the staging area using command

// ```jsx
// git add .
// ```

// - You can commit these changes with the command

// ```jsx
// git commit -m "<add a commit message here>"
// ```

// - Once you’ve added and committed all your files, run this command to push all your commits to your repo.

// ```jsx
// git push origin <branchName>
// ```

// - Now add your Collaborators
//     - Go to settings → collaborators → Add people
    
//     ![Screenshot 2022-04-23 at 10.54.52 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/60632e59-3ae8-4d1b-a25b-2812ae03ef4a/Screenshot_2022-04-23_at_10.54.52_AM.png)
    

// - After clicking on “Add people” fill the required details and then you are done.

// ## ****Scenario 2: As a Collaborator****

// - Your team receive an email letting them know you added them and will be listed as a collaborator.

// ![Screenshot 2022-04-23 at 10.59.06 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/39702a44-9854-44ef-8413-85e22298e47f/Screenshot_2022-04-23_at_10.59.06_AM.png)

// - Click on View invitation to accept invitation and start collaborating

// ![Screenshot 2022-04-23 at 11.02.11 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eab77744-5170-428e-963d-a5ea1ef2ba79/Screenshot_2022-04-23_at_11.02.11_AM.png)

// - As a collaborator, go to the Github Repo page, Git Clone the project.
// - To clone project click on code → copy HTTPS

// ![Screenshot 2022-04-23 at 11.15.09 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1687e1a0-6ec4-4f7d-a317-76ebc55f0a6a/Screenshot_2022-04-23_at_11.15.09_AM.png)

// - Once you have the address of the repositories, you need to use your terminal (through shell commands) to move in the place where you want to put the directory copy (for example you can move in your “*Documents*” folder). When you are ready, you can enter:
// - And now you’re ready to collaborate!
// - Let’s start ****Collaborating****

// ### ****Collaborating:****

// - When you’re using git to work on the same project with multiple people, there’s one central rule you must follow:

// ***THE MASTER BRANCH SHOULD ALWAYS BE DEPLOYABLE***

// - The way to keep Master deployable is to create new ***branches*** for new features and merge them into Master when they’re completed. Here’s how `Branches` works.
// - Whenever you create a new repo, the default branch created is called “***main”***(called as master in older git versions; however, you can easily change them and the new version of git still supports master). *A branch basically contains a set of changes/commits or we can say that it's a flow of changes.*
// - Branches can be more understood with the help of this figure

// ![2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7c8ada5-29ba-4e5c-ab54-150cec2e097f/2.png)

// - Branches should always represent features. For example, if you want to add the Navbar of particular website create a branch called ***navbar_page*** (this name can be anything but keep it meaningful).
// - Like you can see in the figure above, we have the default branch “master” here, which is also referred to as the common base. This base is the most important since it includes the entire history of the repo.
// - The circles along the line represent a commit in that branch. We can create as many branches as we want.
// - The *master* or *main* usually contains the most updated or deployed piece of code, and other commits during the development phase can be made in new branches, but not necessarily. A new branch can be created at any time and from any other branch.
// - To interpret the above figure, we can say that “*There is a main branch in the repo. A new branch has been created from main in the starting itself. There have been two commits in the main branch and three commits in the new branch.”*
// - New branches can be made for a number of reasons, such as:
//     - Say, different people are working on a project, like one person is building `home page`,  and one person is building `product page` team, etc. Each person can create their own branches in the repo, do all development work in it and when it works properly, merge into the main branch.
// - Let’s now create a branch ***navbar_page***
//     - Go to terminal and type the command
    
//     ```jsx
//     git branch navbar_page
//     ```
    
//     - To see the list of branches
    
//     ```jsx
//     git branch
//     ```
    
//     - To create and switch to a new branch at the same time
    
//     ```jsx
//     git branch -b navbar_page
//     ```
    
//     - To rename a branch due to spelling mistake or any other reason
    
//     ```jsx
//     git branch -m <old_branch_name> <new_branch_name>
    
//     git branch -m navbar_page navbar_component
//     ```
    
//     - To delete a branch
    
//     ```jsx
//     git checkout -d navbar_page
//     ```
    
//     - This checkout to a particular branch
    
//     ```jsx
//     git checkout navbar_page
//     ```
    
//     ![Screenshot 2022-04-23 at 11.27.23 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/881824a6-9485-473f-b7bc-3e3363425d4a/Screenshot_2022-04-23_at_11.27.23_AM.png)
    
//     - You’re now in your new branch and can start coding away.
//     - Your new branch is isolated from master branch.
// - Each and every team member can create their own branch and work on their features.
// - Your team spent all day and night working on their separate features in their various branches. They come back the next day with their completed features and want to merge them back into Master to be deployed.
// - To push to master follow these steps

// ```jsx
// git add.  (this will add all your edited files)

// git commit -m "completed navbar"

// git push origin <branchName> i.e git push origin navbar_page
// ```

// ![Screenshot 2022-04-23 at 11.36.24 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/319f9c99-c6de-4212-b1ca-729494efa935/Screenshot_2022-04-23_at_11.36.24_AM.png)

// - Now go to the Github Repo page. You should see the branch you pushed up in a yellow bar at the top of the page with a button to “Compare & pull request”.

// ![Screenshot 2022-04-23 at 11.37.35 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ebc436c7-afd4-4c9e-bae6-cce101568729/Screenshot_2022-04-23_at_11.37.35_AM.png)

// - Click “Compare & pull request”. This will take you to the “Open a pull request” page.
// - This will open a page where you can see that you can trying to merge from ***navbar_page*** branch to ***master branch***

// ![Screenshot 2022-04-23 at 11.39.31 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b6728a9c-2cb6-4fdf-aed8-e35674f12b4e/Screenshot_2022-04-23_at_11.39.31_AM.png)

// - You can also write a brief description of what you actually changed. And you should click the “Reviewers” tab and select whoever your team decided would be the “Merge Master”. When you’re done, click “Create pull request”.

// ![Screenshot 2022-04-23 at 11.41.17 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b722f4c9-aaef-410d-87b2-3f9b011bc6ca/Screenshot_2022-04-23_at_11.41.17_AM.png)

// - When you’re satisfied with the pull request, go to the bottom of the pull request and click “Merge pull request”.

// ![Screenshot 2022-04-23 at 11.43.43 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ef18dd5-0a8b-4a81-97d4-613ec3f0d43d/Screenshot_2022-04-23_at_11.43.43_AM.png)

// - Now your ***navbar_page*** branch is merged into master branch and pull request will be closed.

// ![Screenshot 2022-04-23 at 11.45.21 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f28ac7d-6486-4cee-9d0e-1f535bd4ce7b/Screenshot_2022-04-23_at_11.45.21_AM.png)

// ## **Rinse, Repeat:**

// - And that’s pretty much it! Keep adding new branches for new features and then coming together as a team to merge them into master.
// - Keep master clean and deployable and don’t try to merge more than one branch at a time and you should be good to go.