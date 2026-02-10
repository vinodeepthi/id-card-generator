       function generateCard() {
            const name = document.getElementById('name').value;
            const college = document.getElementById('college').value;
            const location = document.getElementById('location').value;
            const picture = document.getElementById('picture').files[0];

            if (name && college && location && picture) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const pictureUrl = e.target.result;

                    const idCard = `
                        <div class="righttop">Generated ID Card</div>
                        <div id="id-card">
                            <div id="id-left">
                                <img src="${pictureUrl}" alt="Student Picture">
                            </div>
                            <div id="id-right">
                                <p><span class="label">Name:</span> <span class="value">${name}</span></p>
                                <p><span class="label">College:</span> <span class="value">${college}</span></p>
                                <p><span class="label">Location:</span> <span class="value">${location}</span></p>
                            </div>
                        </div>
                    `;

                    document.getElementById('rightside').innerHTML = idCard;
                };
                reader.readAsDataURL(picture);
            } else {
                alert('Please fill out all fields and upload a picture.');
            }
        }
   