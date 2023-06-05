


import hashlib

def convertir_md5_a_sha256(texto):
    # Calcula el hash MD5
    md5_hash = hashlib.md5(texto.encode()).digest()

    # Calcula el hash SHA256
    sha256_hash = hashlib.sha256(md5_hash).hexdigest()

    return sha256_hash

texto_md5 = "5d41402abc4b2a76b9719d911017c592" # MD5 hash

texto_sha256 = convertir_md5_a_sha256(texto_md5)
print("Texto original (MD5):", texto_md5)
print("Texto convertido (SHA256):", texto_sha256)
