// Introduction to Git (Part-1)
// Ever felt frustrated because of not being able to recover a small code snippet  which got deleted accidentally? If the answer to the above questions is yes, then this tutorial is for you.
// This tutorial assumes that you already have a GitHub account and the Git Bash application installed on your system If not follow step 1 or watch lecture video.
// Defining Keywords
// Before learning to use GitHub, let’s understand some common terminologies which you will encounter throughout this tutorial:

// Repository — In layman terms, this is analogous to a project folder that contains all your project files. Standard practice is to have one repository per project.
// Branch — Generally, developers use different branches for maintaining different modules of the project. Another common scenario that warrants the use of branches is when multiple members of the team want to work on the same piece of code. This is when each one can have its branch. By default, each newly created repository has a central branch named “master”.
// Clone — Cloning is like copying and pasting the repository from one drive(developer’s folder on GitHub) to another (our local folder).
// Stage & Commit — Creation of a new project version, on your git repository, is a 2 step process. The first step is to collect all the files which are required to be a part of the new version. This is called staging the files. The second step is to create the new version of your project which is called committing. Only those files which are staged, can be committed to a new version.
// Push & Pull — Given our focus on GitHub, push and pull is about interacting with repositories stored on GitHub’s cloud. A pull is like downloading the latest version and a push is synonymous to uploading your latest version on GitHub
// Step-1: Git installation
// Firstly, install Git tools on your computer. There are different Git software, but it’s better to install the basic one to start with. We will use the command line to communicate with GitHub.
// Once you are more comfortable with the command line, you can download Git software with a user interface.
// For Ubuntu:
// First, update your packages:

// $ sudo apt update

// Next, install Git with apt-get:

// $ sudo apt-get install git

// Finally, verify that Git is installed correctly:

//    $ git --version
// For MacOSX:
// First, download the latest Git for Mac installer.

// Next, follow instructions on your screen.

// Finally, open a terminal and verify that Git is installed correctly:

//    $ git --version
// For Windows:
// First, download the latest Git for Windows installer.

// Next, follow instructions on your screen (you can leave the default options).

// Finally, open a terminal (example: powershell or git bash) and verify that Git is installed correctly:

// $ git --version
// For all users:
// One last step is needed to complete the installation correctly! You need to run the following commands in your terminal with your information to set a default username and email when you are going to save your work.
// This should be done only once and not for every project, since you are setting this up globally.
// git config --global user.name "<your_name_here>"
// git config --global user.email "<your_email@email.com>"
// Step-2: Your first GitHub project!
// Go to the main GitHub page and click on the “+” icon in the menu bar. Once you click on this button, a new menu appears with a “New repository” entry. Click on it!


// The repository creation page will appear. Choose a cool name for your first repository and put a small description before clicking on the “Create repository” button.


// Step-3: A local version of your project
// Now get a copy of the repository on your computer. To do that, you need to “clone” the repository. On the repository page, you need to get the “HTTPS” address.


// Once you had the address of the repositories, you need to use your terminal (through shell commands) to move in the place where you want to put the directory copy (for example you can move in your “Documents” folder). When you are ready, you can enter:
// $ git clone [HTTPS ADDRESS]


// Now, your repository is on your computer. You need to move in it with:
// $ cd [NAME OF REPOSITORY]
// Now you can add all of your files to the staging area using command
// git add .
// You can commit these changes with the command
// git commit -m "<add a commit message here>"
// Once you’ve added and committed all your files, run this command to push all your commits to your repo.
// git push origin <branchname>









// # *Introduction to Git*

// ## Why Use the Command Line?

// - Both the GUI(Graphical User Interface) and CLI(Command Line Interface) are ways you can interact with your computer.
// - But when it comes to the command line, once you learn the commands, it is faster and more powerful to navigate and use your computer. This is why many programmers prefer the command line.
// - Graphical user interfaces make easy tasks easy, while command line interfaces make difficult tasks possible

// ## What is the shell?

// - When we speak of the command line, we are really referring to the shell. The shell is a program that takes keyboard commands and passes them to the operating system to carry out.

// ### Some Useful Commands

// | Command | Functionality |
// | --- | --- |
// | date | displays current date and time |
// | cal | displays a calendar of the current month |
// | df | see the current amount of free space on our disk drives |
// | free | display the amount of free memory |
// | date -u -R
// date -uR
// date -Ru | Shows the universal date time in RFC format |
// | pwd | print working directory |
// | cd | change directory |
// | cd .. | working directory parent |
// | cd / cd~ |  home directory |
// | ls | list files |
// | ls-l | show detailed info in columns |
// | ls -a | include hidden files also |
// | ls -t | sort by last modified date newest first |
// | ls -R | recursively list subdirectories |
// | ls -F | indicator at the end of each file /
//  if it is a directory |
// | ls -S
//  | sort by size |
// | mkdir <directory> | create directory |
// | mkdir <dir1> <dir2> <dir3>
//  | create multiple directories |
// | cp <item1> <item2> | copies the single file or directory item1 to the file or directory item2 |
// | cp file1 file2 dir1 | Copy file1 and file2 into directory |
// | cp dir1/* dir2 | Using a wildcard, copy all the files in dir1 into dir2. The directory dir2 must already exist. |
// | mv <item1> <item2> | performs both file moving and file renaming |
// | mv file1 file2
//  | Move file1 to file2. If file2 exists, it is overwritten with the contents of file1. If file2 does not exist, it is created. In either case, file1 ceases to exist. |
// | mv dir1 dir2 | if directory dir2 does not exist, create directory dir2 and move the contents of directory dir1 into dir2 and delete directory dir1.If directory dir2 does exist, move directory dir1 (and its contents) into directory dir2. |
// | rm <item> | used to remove (delete) files and directories |

// # Introduction to GIT:

// - Ever felt frustrated because of not being able to recover a small **code snippet** 
// which **got deleted accidentally**? If the answer to the above questions is yes, then this tutorial is for you.
// - This tutorial assumes that you already have a **GitHub account** and the **Git Bash application installed** on your system If not follow step 1 or watch lecture video.

// # **Defining Keywords**

// Before learning to use GitHub, let’s understand some common terminologies which you will encounter throughout this tutorial:

// 1. **Repository**:
//     - A repository, or repo for short, is like a project folder or container that holds all your project files, including code, documentation, and other assets.
//     - It serves as a centralized location for tracking changes and collaborating with others on a project.
//     - It is common practice to have one repository per project to keep things organized.
// 2. **Branch**:
//     - A branch is a separate line of development within a repository.
//     - Developers often use different branches to work on distinct modules or features of a project. This helps isolate changes and prevents interference with other parts of the project.
//     - Branches are also used when multiple team members need to work on the same piece of code simultaneously. Each developer can have their own branch to make changes without affecting the main codebase.
//     - By default, each newly created repository has a central branch named "master," but this can be customized to use a different default branch name, such as "main."
// 3. **Clone**:
//     - Cloning is the process of copying an entire repository from a remote location (typically on GitHub) to your local machine.
//     - This allows you to have a local copy of the project to work on, make changes, and contribute to the project.
//     - Cloning is like copying and pasting the entire repository, including all its branches and files, to your local development environment.
// 4. **Stage & Commit**:
//     - Creating a new version of your project in Git is a two-step process.
//     - **Staging** involves selecting and preparing the files that should be included in the next version. You decide which changes to include in the upcoming commit.
//     - **Committing** is the act of creating a snapshot of your project at a specific point in time, which includes all the changes you've staged. Commits are like milestones in your project's history.
//     - Only files that have been staged can be committed. Commits are accompanied by a message that describes the changes made in that commit.
// 5. **Push & Pull**:
//     - When working with Git and GitHub, "push" and "pull" are actions related to interacting with repositories stored on GitHub's cloud servers.
//     - **Push** is the process of uploading your latest local changes to the remote repository on GitHub. This makes your changes available to other collaborators.
//     - **Pull** is the process of downloading the latest changes from the remote repository to your local repository. It helps you stay up-to-date with the work of others and ensures that your local copy reflects the most recent changes made by your team.

// ## Step-1: **Git installation**

// - Firstly, install Git tools on your computer. There are different Git software, but it’s better to install the basic one to start with. We will use the command line to communicate with GitHub.

// ### **For Ubuntu:**

// First, update your packages:

// $ sudo apt update

// Next, install Git with apt-get:

// $ sudo apt-get install git

// Finally, verify that Git is installed correctly:

// ```jsx
//    $ git --version
// ```

// ### **For MacOSX:**

// First, download the latest  [Git for Mac installer](https://sourceforge.net/projects/git-osx-installer/files/).

// Next, follow instructions on your screen.

// Finally, open a terminal and verify that Git is installed correctly:

// ```
//    $ git --version
// ```

// ### **For Windows:**

// First, download the latest  [Git for Windows installer](https://gitforwindows.org/).

// Next, follow instructions on your screen (you can leave the default options).

// Finally, open a terminal (example: powershell or git bash) and verify that Git is installed correctly:

// ```
// $ git --version
// ```

// ### **For all users:**

// - One last step is needed to complete the installation correctly! You need to run the following commands in your terminal with your information to set a default username and email when you are going to save your work.
// - **This should be done only once and not for every project, since you are setting this up globally.**

// ```jsx
// git config --global user.name "<your_name_here>"
// git config --global user.email "<your_email@email.com>"

// Example
// git config --global user.name "balakrishan"

// git config --global user.email "abc@gmail.com"

// // To crosscheck

// git config --list
// ```

// ## Step-2: Your first GitHub project!

// - Go to the main GitHub page and click on the “*+*” icon in the menu bar. Once you click on this button, a new menu appears with a “*New repository*” entry. Click on it!

// ![Screenshot 2022-04-22 at 11.11.23 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a821be25-2074-4be7-83bd-05cc6cc927f0/Screenshot_2022-04-22_at_11.11.23_PM.png)

// - [The repository creation page](https://github.com/new) will appear. Choose a cool name for your first repository and put a small description before clicking on the “*Create repository*” button.

// ![Screenshot 2022-04-22 at 11.14.24 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/adb02865-713d-4c9d-a2fb-13e609851281/Screenshot_2022-04-22_at_11.14.24_PM.png)

// ## Step-3: **A local version of your project**

// - Now get a copy of the repository on your computer. To do that, you need to “*clone*” the repository. On the repository page, you need to get the “*HTTPS*” address.

// ![Screenshot 2022-04-22 at 11.18.36 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6021a6a0-0982-4c9f-91c1-0ba2b419766d/Screenshot_2022-04-22_at_11.18.36_PM.png)

// - Once you had the address of the repositories, you need to use your terminal (through shell commands) to move in the place where you want to put the directory copy (for example you can move in your “*Documents*” folder). When you are ready, you can enter:

// ```jsx
// $ git clone [HTTPS ADDRESS]
// ```

// ![Screenshot 2022-04-22 at 11.22.06 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6dd3fec9-053c-4bcd-8495-b766b98da87d/Screenshot_2022-04-22_at_11.22.06_PM.png)

// - Now, your repository is on your computer. You need to move in it with:

// ```jsx
// $ cd [NAME OF REPOSITORY]
// ```

// - Now you can add all of your files to the staging area using command

// ```jsx

// git add <filename> // adding individual files
// git add .  // adding all files
// ```

// - You can commit these changes with the command

// ```jsx
// git commit -m "<add a commit message here>"
// ```

// - Once you’ve added and committed all your files, run this command to push all your commits to your repo.

// ```jsx
// git push origin <branchname>
// ```

// ## Some Useful commands for Navigation from terminal

// ![Screenshot 2022-05-19 at 10.19.01 AM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7bfd928f-e133-4005-970d-0c9de3ad44e0/Screenshot_2022-05-19_at_10.19.01_AM.png)