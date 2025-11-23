function submit(){
    let selctedBatchTiming = [];

    Document
    .querySelectAll("Input[name='batch']:checked")
    .forEach((element) => {
        selctedBatchTiming.push(element.value);
    });

    console.log(selctedBatchTiming);


    // const selctedBatch = document.querySelector(
    //     "input[name='timing']:checked"
    // ).value;

    // console.log(selctedBatch);

}

// function clearForm(){
//     window.location.reload();
// }