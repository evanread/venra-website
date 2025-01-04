import React, { useRef, useState } from 'react';
import { Upload, Loader2 } from 'lucide-react';
import { uploadImage } from '@/lib/images';
import { Button } from './Button';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  className?: string;
}

export function ImageUpload({ onUpload, className }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const url = await uploadImage(file);
      onUpload(url);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={className}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        className="hidden"
      />
      <Button
        type="button"
        variant="outline"
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
      >
        {isUploading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="w-4 h-4 mr-2" />
            Upload Image
          </>
        )}
      </Button>
    </div>
  );
}