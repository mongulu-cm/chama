<?php

namespace App\Entity;

use App\Repository\AlbumRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AlbumRepository::class)]
class Album
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'albums')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Actu $actu = null;

    #[ORM\Column(length: 255)]
    private ?string $imageAlbum = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getActu(): ?Actu
    {
        return $this->actu;
    }

    public function setActu(?Actu $actu): static
    {
        $this->actu = $actu;

        return $this;
    }

    public function getImageAlbum(): ?string
    {
        return $this->imageAlbum;
    }

    public function setImageAlbum(string $imageAlbum): static
    {
        $this->imageAlbum = $imageAlbum;

        return $this;
    }

    public function __toString(): string
    {
        return $this->imageAlbum;
    }
}
