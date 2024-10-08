import React, { useState, useEffect } from 'react';

const ImageUploader = ({ imageArr, setImageArr, setLoading, id, adminapi }) => {
  const [error, setError] = useState('');
  const [ffdata, setFfdata] = useState([]);
  let [formData, setFormData] = useState({ docType: 'course', docDetails: 'course' });

  useEffect(() => {
    if (id && id !== "") {
      setFormData({ ...formData, originalname: id, docDetails: id });
    }
  }, [id]);

  const handleImageChange = (event) => {
    setError('');
    const files = event.target.files;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 1048576; // 1MB in bytes

    // Check if any files were selected
    if (files.length === 0) return;

    // Validate each selected file
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!allowedTypes.includes(file.type)) {
        setError('Please select only image files (JPEG, PNG, GIF)');
        return;
      } else {
        setError('');
      }
      let sd = parseInt(file?.size ?? 0);
      if (sd > parseInt(maxSize)) {
        setError('File size exceeds the limit (1MB)');
        return;
      } else {
        setError('');
      }
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setFfdata((ffdata) => [...urls]);
      setFormData({
        ...formData,
        gh: files
      });
    }
    setError('');

  };

  const updateLocation = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    let dcfv = { ...formData };

    if (ffdata.length >= 5) {
      alert('You can upload only 5 Images');
      setLoading(false);
      return;
    }

    let formvb = new FormData();

    for (let i = 0; i < formData.gh.length; i++) {
      formvb.append("files", formData.gh[i]);
    }
    formvb.append("docType", dcfv.docType);
    formvb.append("docDetails", dcfv.docDetails);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    try {
      const response = await adminapi.post('/addupload', formvb, config);
      if (response.data && response.data.length > 0) {
        setLoading(false);
        let sdsdcv = response.data.map(s=>s.imageurl);
        setImageArr(sdsdcv);
        setFormData({});
        setFfdata([]);
      }
    } catch (error) {
      setLoading(false);
      setError('Error uploading image. Please try again with file size less than 1MB');
    }
  };

  return (
    <form id="contact_form" method="post" encType="multipart/form-data">
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-600 mb-2">
          Upload Image(s)
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
        {error && (
          <p className="text-sm text-red-500 mt-1">{error}</p>
        )}
        {ffdata && ffdata.length > 0 && !error && ( // Check if there are images and no errors
          <button type="submit" onClick={(e) => updateLocation(e)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload
          </button>
        )}

        <div className="flex flex-wrap mt-4">
          {imageArr && imageArr.map((image, index) => ( // Only display uploaded images
            <div key={index} className="w-1/4 p-2">
              <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-md shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default ImageUploader;
