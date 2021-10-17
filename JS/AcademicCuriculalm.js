// all selector defined here
const oflineUserBtn = document.getElementById('offline-user')
const dutypediaUserBtn = document.getElementById('dutypedia-user')
const handleBookList = document.getElementById("book-list")
const handleCreateGroupBtn = document.getElementById("create-group-btn")
const groupPartSection = document.getElementById("group-part")
const handleCreatedBookList = document.querySelector("#created-book-list")
const addMoreBookList = document.getElementById("addMore-bookList")
const postDataBtn = document.querySelector("#postDataBtn")
const userInputRowEdit = document.querySelector("#edit-input-field")
const cancleEditInput = document.querySelector("#cancleEditInput")
const deleteTableRow = document.querySelector("#delete-input-field")
const denyBtnToDelete = document.querySelector("#denyBtn")
const saveRowDataBtn = document.querySelector("#saveDataBtn")
const confirmDeleteRowBtn = document.querySelector("#confirmDeleteBtn")
const handleRoutineCard = document.querySelector(".routine-card")
const handleClassRoutine = document.querySelector("#class-routine")
const handleDietRoutine = document.querySelector("#diet-routine")
const handleWorkoutRoutine = document.querySelector("#workout-routine")
const handleAddMoreRoutineBtn = document.getElementById("addMore-routine-btn")
const createdClassRoutineIconBtn = document.getElementById("created-class-routine")
const classRoutineChoosDayNext = document.getElementById("choosDayNext")
const classRoutineCancelChoosDay = document.getElementById("choosDayCancel")
const createClassRoutineBtn = document.getElementById("createRoutineBtn")
const cancelCreateRoutineBtn = document.getElementById("cancelCreateRoutineBtn")
const editClassRoutineBtn = document.getElementById("edit-class-routine")
const removeClassRoutineBtn = document.getElementById("delete-class-routine")
const confirmRoutineDeletePopupBtn = document.getElementById("confirmRoutineDeleteBtn")
const cancleRoutineDeletePopup = document.getElementById("cancleRoutineDeleteBtn")
const yesCreateRoutineCancelBtn = document.getElementById("yes_CreateRoutine_CancelBtn")
const noCreateRoutineBtn = document.getElementById("no_CreateRoutine_Btn")
const createdNewClassRoutine = document.getElementById("created-new-classRoutine")




// class routine start here
// handleClassRoutine  for make class routine
handleClassRoutine.addEventListener("click", () => {
    handleClassRoutine.style.color = "#E22222"
    handleClassRoutine.style.borderColor = "#E22222"
    handleDietRoutine.style.color = "#666666"
    handleDietRoutine.style.borderColor = "#666666"
    handleWorkoutRoutine.style.color = "#666666"
    handleWorkoutRoutine.style.borderColor = "#666666"
})


// handleDietRoutine for make class routine
handleDietRoutine.addEventListener("click", () => {
        handleDietRoutine.style.color = "#E22222"
        handleDietRoutine.style.borderColor = "#E22222"
        handleClassRoutine.style.color = "#666666"
        handleClassRoutine.style.borderColor = "#666666"
        handleWorkoutRoutine.style.color = "#666666"
        handleWorkoutRoutine.style.borderColor = "#666666"
    })
    // handleDietRoutine for make class routine
handleWorkoutRoutine.addEventListener("click", () => {
    handleWorkoutRoutine.style.color = "#E22222"
    handleWorkoutRoutine.style.borderColor = "#E22222"
    handleClassRoutine.style.color = "#666666"
    handleClassRoutine.style.borderColor = "#666666"
    handleDietRoutine.style.color = "#666666"
    handleDietRoutine.style.borderColor = "#666666  "
})

// class routine plus(create a routin) icon handelerr
createdClassRoutineIconBtn.addEventListener("click", () => {
    document.getElementById("routine-user-input").style.display = "block"
    createdClassRoutineIconBtn.style.display = "none"
})

// handle user choose day selection btn
classRoutineChoosDayNext.addEventListener("click", () => {
    document.getElementById("class-routine-table-section").style.display = "block"
    document.getElementById("routine-user-input").style.display = "none"
})

// handle user cancel choose day btn
classRoutineCancelChoosDay.addEventListener("click", () => {
    document.getElementById("created-class-routine").style.display = "block"
    document.getElementById("routine-user-input").style.display = "none"
})

// handle create routine btn
createClassRoutineBtn.addEventListener("click", () => {
    document.getElementById("class-routine-table-section").style.display = "none"
    document.getElementById("after-created-routine").style.display = "block"
})

// handle edit routine
editClassRoutineBtn.addEventListener("click", () => {
    document.getElementById("class-routine-table-section").style.display = "block"
    document.getElementById("after-created-routine").style.display = "none"
})

// handle edit routine and show delete pop up
removeClassRoutineBtn.addEventListener("click", () => {
    document.getElementById("delete-routine-popup").style.display = "block"
    document.getElementById("academic-activities-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(2px)" //blur display
})


// handle cancel remove routine pop up box
cancleRoutineDeletePopup.addEventListener("click", () => {
    document.getElementById("delete-routine-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".vendor-section").style.filter = "blur(0)" //remove blur from display
})


// handle  remove routine pop up box
confirmRoutineDeletePopupBtn.addEventListener("click", () => {
        document.getElementById("after-created-routine").style.display = "none"
        document.getElementById("delete-routine-popup").style.display = "none"
        document.getElementById("academic-activities-section").style.filter = "blur(0)" //remove blur from display
        document.querySelector(".top-nav-bar-section").style.filter = "blur(0)" //remove blur from display
        document.querySelector(".vendor-section").style.filter = "blur(0)" //remove blur from display
        document.getElementById("created-class-routine").style.display = "block"

    })
    // handle  remove routine pop up box
cancelCreateRoutineBtn.addEventListener("click", () => {
    document.getElementById("cancel-routine-popup").style.display = "block"
    document.getElementById("academic-activities-section").style.filter = "blur(2px)" //remove blur from display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(2px)" //remove blur from display
    document.querySelector(".vendor-section").style.filter = "blur(2px)" //remove blur from display

})




// handle  yes CreateRoutine CancelBtn pop up box
yesCreateRoutineCancelBtn.addEventListener("click", () => {
    document.getElementById("class-routine-table-section").style.display = "none"
    document.getElementById("cancel-routine-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".vendor-section").style.filter = "blur(0)" //remove blur from display
    document.getElementById("created-class-routine").style.display = "block"

})

// handle  yes CreateRoutine CancelBtn pop up box
noCreateRoutineBtn.addEventListener("click", () => {
    document.getElementById("cancel-routine-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(0)" //remove blur from display
    document.querySelector(".vendor-section").style.filter = "blur(0)" //remove blur from display
})


// handle  yes CreateRoutine CancelBtn pop up box
createdNewClassRoutine.addEventListener("click", () => {
    document.getElementById("routine-user-input").style.display = "block"
    document.getElementById("after-created-routine").style.display = "none"
})



// handle routine table coloum
handleAddMoreRoutineBtn.addEventListener("click", () => {
    console.log("hi")
    const tableCol = document.createElement("div")
    tableCol.className = "routine-coloum order-3"
    tableCol.innerHTML =
        `
            <ul class="mx-0 px-0">
                <li><input type="text" class="selection-day-col" value="1st class"></li>
                <li>
                    <div class="d-flex time-input-container">
                        <input type="time" class="select-time-input" value="09:30:00">
                        <span>to</span>
                        <input type="time" class="select-time-input" value="09:30:00">
                    </div>
                </li>
                <li><input type="text" class="input-class-subject" value="Bangla"></li>
                <li><input type="text" class="input-class-subject" value="Bangla"></li>
                <li><input type="text" class="input-class-subject" value="Bangla"></li>
                <li><input type="text" class="input-class-subject" value="Bangla"></li>
                <li><input type="text" class="input-class-subject" value="Bangla"></li>
                <li><input type="text" class="input-class-subject" value="Bangla"></li>
                <li><input type="text" class="input-class-subject"></li>
            </ul>


    `
    document.querySelector(".routine-table-body-section").appendChild(tableCol)

})


// const showPopupBox = () => {

// }

// class routine end here
// class routine end here
// class routine end here

// ========================================================================================================
//==================================class routine end here===============================================
//========================================================================================================


//handle oflineUserBtn btn
oflineUserBtn.addEventListener('click', () =>
    changeBtnColor("#E22222", "#E22222", "#666666", "#d3d3d3")
)

//handle duplidiya btn
dutypediaUserBtn.addEventListener('click', () =>
    changeBtnColor("#666666", "#d3d3d3", "#E22222", "#E22222")
)

// duplidya and offline button color managment
const changeBtnColor = (offlineColor, offlineBorderColor, duplidiyaColor, duplidiayBorderColor) => {
    oflineUserBtn.style.color = offlineColor
    oflineUserBtn.style.borderColor = offlineBorderColor
    dutypediaUserBtn.style.color = duplidiyaColor
    dutypediaUserBtn.style.borderColor = duplidiayBorderColor
}


// handle create-group-btn 
handleCreateGroupBtn.addEventListener("click", () => {
    groupPartSection.style.display = "none"
    document.getElementById("academic-activities-section").style.display = "block"
})


// add booklist handleer booklist card activities
handleBookList.addEventListener('click', () => {
    document.querySelector("#created-book-list").style.display = 'block'
    document.querySelector("#booklist-table").style.display = "none"
    document.querySelector("#booklist-edit").style.display = "none"
})


// add routine handleer  card activities
handleRoutineCard.addEventListener("click", () => {
    document.getElementById("routine-top-btn-section").style.display = "block"
})


// const acaemicActivitiesCreateBtn = (e) => {
//     if (e === "handleBookList" || e === "routine-card") {
//         document.querySelector("#created-book-list").style.display = 'block'
//     }
//     //else
//     else {
//         console.log("dont work")
//     }
// }



// handle created book list
handleCreatedBookList.addEventListener('click', () => {
    document.querySelector("#booklist-table").style.display = "block"
    document.querySelector("#addServerbuttonInner").style.display = "block"
    handleCreatedBookList.style.display = "none"
    document.querySelector("#tableButtonbottom").style.display = "none"
})


//handle postDataBtn 
postDataBtn.addEventListener('click', () => {
    document.querySelector("#booklist-edit").style.display = "block"
    document.querySelector("#addServerbuttonInner").style.display = "none"
    document.querySelector("#first-table-row").style.display = "none"
    document.querySelector("#static-table-value").style.display = "block"


})

// handle edit row 
userInputRowEdit.addEventListener("click", () => {
    document.getElementById("tableButtonbottom").style.display = "block"
    document.getElementById("addServerbuttonInner").style.display = "none"
})


// handle save data btn
saveRowDataBtn.addEventListener("click", () => {
    document.getElementById("tableButtonbottom").style.display = "none"
})

// handle cancle edit row 
cancleEditInput.addEventListener("click", () => {
    document.getElementById("tableButtonbottom").style.display = "none"
})

// handle userTableDeleter Row 
deleteTableRow.addEventListener("click", () => {
    document.getElementById("delete-booklist-popup").style.display = "block"
    document.getElementById("academic-activities-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".top-nav-bar-section").style.filter = "blur(2px)" //blur display
    document.querySelector(".vendor-section").style.filter = "blur(2px)" //blur display
})

// handle deny(when user click = NO) delete table row;
denyBtnToDelete.addEventListener("click", () => {
    document.getElementById("delete-booklist-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0px)"
})


// handle confirm deleter button on table
confirmDeleteRowBtn.addEventListener("click", () => {
    document.querySelector("#booklist-table").style.display = "none"
    document.querySelector("#booklist-edit").style.display = "none"
    document.querySelector("#delete-booklist-popup").style.display = "none"
    document.getElementById("academic-activities-section").style.filter = "blur(0px)"
})


// handle add more booklist row
addMoreBookList.addEventListener("click", () => {
    const tableRow = document.createElement("div")
    tableRow.className = "row user-input-box"
    tableRow.innerHTML =
        `
            <div class="col-lg-3 px-0">
                <div class="left-border">
                    <input type="text" class="user-input-text">
                </div>
            </div>
            <div class="col-lg-3 px-0">
                <div class="left-border">
                    <input type="text" class="user-input-text">
                </div>
            </div>
            <div class="col-lg-3 px-0">
                <div class="left-border">
                    <input type="text" class="user-input-text">
                </div>
            </div>
            <div class="col-lg-3 px-0">
                <div>
                    <input type="text" class="user-input-text">
                </div>
            </div>
    
    `
    document.getElementById("main-table").appendChild(tableRow)

})