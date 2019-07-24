//child_remove
db.ref("expenses").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

//child_change
db.ref("expenses").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

//child_added
db.ref("expenses").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val());
});

// db.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })
//     console.log(expenses);
// })
// db.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//         const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })
//     console.log(expenses);
//   });

// db.ref('notes/-LkT-mXIO17i1OuSijIm').remove();

// db.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 9452352359235
// });

// db.ref('expenses').push({
//     description: 'Phone Bill',
//     note: '',
//     amount: 5900,
//     createdAt: 9452352359235
// });

// db.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 9452352359235
// });

// db.ref('notes').push({
//     title: 'Course Topics',
//     body: 'Angular, React, Python'
// });

// //real time data fetch
// db.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
// });

// one time data fetch
// db.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('error fetching data', e);
// })

// //firebase testing db
// db.ref().set({
//     name: 'Myko Miparanum',
//     age: 25,
//     stressLevel: 6,
//     Job: {
//         title: 'Developer',
//         company: 'google'
//     },
//     location: {
//         city: 'Iligan City',
//         country: 'Philippines'
//     }
// }).then(() => {
//     console.log('Data is Saved');
// }).catch((e) => {
//     console.log('Failed!', e);
// });

// db.ref().update({
//     stressLevel: 9,
//     'Job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// // //db.ref().set('This is my data');

// // db.ref('age').set(27);
// // db.ref('location/city').set('Cagayan de Oro');
// // db.ref('attributes'). set({
// //         height: 180,
// //         weight: 150
// // }).then(() => {
// //     console.log('second set call worked.');
// // }).catch((e) => {
// //     console.log('things didnt for the second error', e);
// // });

// // db.ref().remove().then(() => {
// //     console.log('Data was removed');
// // }).catch(() => {
// //     console.log('Did not remove data');
// // });
